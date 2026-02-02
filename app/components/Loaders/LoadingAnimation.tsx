"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const LoadingAnimation = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <DotLottieReact
        src="/animation/Home.lottie"
        loop
        autoplay
      />
    </div>
  );
};

export default LoadingAnimation;
