import {
  CalendarCheck,
  Certificate,
  SealPercent,
  Sparkle,
  Stethoscope,
} from "@phosphor-icons/react";

const QUICK_TILE_FILLED_ICONS = {
  symptoms: Stethoscope,
  booking: CalendarCheck,
  sfr: Certificate,
  new: Sparkle,
  promo: SealPercent,
};

/** Залитые иконки для быстрых плиток в оранжевой шапке (супер-апп стиль). */
export function QuickTileFilledIcon({ tileId, className }) {
  const Icon = QUICK_TILE_FILLED_ICONS[tileId];
  if (!Icon) return null;

  return (
    <Icon
      size={28}
      weight="fill"
      className={className}
      color="currentColor"
      aria-hidden
    />
  );
}
