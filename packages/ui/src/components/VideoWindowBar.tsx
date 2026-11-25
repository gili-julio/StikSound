import React from "react";

export interface VideoWindowBarProps {
  clipDurationMs: number;
  startMs: number;
  windowMs: number;
  isBusy: boolean;
  onChangeStart: (startMs: number) => void;
  labels: {
    title: string;
    shortClip: string;
  };
}

function formatSec(ms: number): string {
  return `${(ms / 1000).toFixed(1)}s`;
}

/**
 * Picks which part of a video sticker is shown when its sound was replaced by another one.
 */
export const VideoWindowBar: React.FC<VideoWindowBarProps> = ({
  clipDurationMs,
  startMs,
  windowMs,
  isBusy,
  onChangeStart,
  labels
}) => {
  const maxStartMs = Math.max(0, clipDurationMs - windowMs);
  const boundedStartMs = Math.max(0, Math.min(startMs, maxStartMs));
  const endMs = Math.min(clipDurationMs, boundedStartMs + windowMs);
  const leftPct = clipDurationMs > 0 ? (boundedStartMs / clipDurationMs) * 100 : 0;
  const widthPct = clipDurationMs > 0 ? ((endMs - boundedStartMs) / clipDurationMs) * 100 : 100;
  const canMove = maxStartMs > 0;

  return (
    <div className="stik-video-window-bar" data-testid="video-window-bar">
      <span className="stik-video-window-label">{labels.title}</span>
      <div className="stik-video-window-track">
        <div
          className="stik-video-window-selection"
          style={{ left: `${leftPct}%`, width: `${Math.max(4, widthPct)}%` }}
        />
      </div>
      {canMove ? (
        <input
          type="range"
          data-testid="video-window-slider"
          aria-label={labels.title}
          className="stik-trim-slider"
          min={0}
          max={maxStartMs}
          step={10}
          value={boundedStartMs}
          disabled={isBusy}
          onChange={(e) => onChangeStart(Number(e.target.value))}
        />
      ) : (
        <span className="stik-duration-pill">{labels.shortClip}</span>
      )}
      <span data-testid="video-window-readout" className="stik-duration-pill">
        {formatSec(boundedStartMs)} - {formatSec(endMs)} / {formatSec(clipDurationMs)}
      </span>
    </div>
  );
};
