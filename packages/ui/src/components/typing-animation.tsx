"use client";

import { cn } from "@workspace/ui/lib/utils";
import { type MotionProps, motion, useInView } from "motion/react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

interface TypingAnimationProps extends MotionProps {
  children?: string;
  words?: string[];
  className?: string;
  duration?: number;
  typeSpeed?: number;
  deleteSpeed?: number;
  delay?: number;
  pauseDelay?: number;
  loop?: boolean;
  as?: React.ElementType;
  startOnView?: boolean;
  showCursor?: boolean;
  blinkCursor?: boolean;
  cursorStyle?: "line" | "block" | "underscore";
}

export function TypingAnimation({
  children,
  words,
  className,
  duration = 100,
  typeSpeed,
  deleteSpeed,
  delay = 0,
  pauseDelay = 1000,
  loop = false,
  as: Component = "span",
  startOnView = true,
  showCursor = true,
  blinkCursor = true,
  cursorStyle = "line",
  ...props
}: TypingAnimationProps) {
  const MotionComponent = motion.create(Component, {
    forwardMotionProps: true,
  });

  const [displayedText, setDisplayedText] = useState<string>("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [phase, setPhase] = useState<"typing" | "pause" | "deleting">("typing");
  const elementRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(elementRef as React.RefObject<Element>, {
    amount: 0.3,
    once: true,
  });

  const wordsToAnimate = useMemo(
    () => words || (children ? [children] : []),
    [words, children]
  );
  const hasMultipleWords = wordsToAnimate.length > 1;

  const typingSpeed = typeSpeed || duration;
  const deletingSpeed = deleteSpeed || typingSpeed / 2;

  const shouldStart = startOnView ? isInView : true;

  const getTimeoutDelay = useCallback(() => {
    if (delay > 0 && displayedText === "") {
      return delay;
    }

    const phaseDelays = {
      typing: typingSpeed,
      deleting: deletingSpeed,
      pause: pauseDelay,
    };

    return phaseDelays[phase] || pauseDelay;
  }, [delay, displayedText, phase, typingSpeed, deletingSpeed, pauseDelay]);

  const processTypingPhase = useCallback(() => {
    const currentWord = wordsToAnimate[currentWordIndex] || "";
    const graphemes = Array.from(currentWord);

    const handleTyping = () => {
      if (currentCharIndex < graphemes.length) {
        setDisplayedText(graphemes.slice(0, currentCharIndex + 1).join(""));
        setCurrentCharIndex(currentCharIndex + 1);
        return;
      }

      const isLastWord = currentWordIndex === wordsToAnimate.length - 1;
      const shouldContinue = hasMultipleWords || loop;

      if (shouldContinue && (!isLastWord || loop)) {
        setPhase("pause");
      }
    };

    const handleDeleting = () => {
      if (currentCharIndex > 0) {
        setDisplayedText(graphemes.slice(0, currentCharIndex - 1).join(""));
        setCurrentCharIndex(currentCharIndex - 1);
        return;
      }

      const nextIndex = (currentWordIndex + 1) % wordsToAnimate.length;
      setCurrentWordIndex(nextIndex);
      setPhase("typing");
    };

    if (phase === "typing") {
      handleTyping();
    } else if (phase === "pause") {
      setPhase("deleting");
    } else if (phase === "deleting") {
      handleDeleting();
    }
  }, [
    currentCharIndex,
    currentWordIndex,
    hasMultipleWords,
    loop,
    wordsToAnimate,
    phase,
  ]);

  useEffect(() => {
    if (!shouldStart || wordsToAnimate.length === 0) {
      return;
    }

    const timeout = setTimeout(() => {
      processTypingPhase();
    }, getTimeoutDelay());

    return () => clearTimeout(timeout);
  }, [shouldStart, wordsToAnimate.length, getTimeoutDelay, processTypingPhase]);

  const currentWordGraphemes = Array.from(
    wordsToAnimate[currentWordIndex] || ""
  );
  const isComplete =
    !loop &&
    currentWordIndex === wordsToAnimate.length - 1 &&
    currentCharIndex >= currentWordGraphemes.length &&
    phase !== "deleting";

  const shouldShowCursor =
    showCursor &&
    !isComplete &&
    (hasMultipleWords ||
      loop ||
      currentCharIndex < currentWordGraphemes.length);

  const shouldRenderCursor = Boolean(shouldShowCursor);

  const getCursorChar = () => {
    const cursorChars = {
      block: "▌",
      underscore: "_",
      line: "|",
    };

    return cursorChars[cursorStyle] || cursorChars.line;
  };

  return (
    <MotionComponent
      className={cn("leading-20 tracking-[-0.02em]", className)}
      ref={elementRef}
      {...props}
    >
      {displayedText}
      {shouldRenderCursor ? (
        <span
          className={cn("inline-block", blinkCursor && "animate-blink-cursor")}
        >
          {getCursorChar()}
        </span>
      ) : null}
    </MotionComponent>
  );
}
