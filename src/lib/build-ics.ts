import type { WeddingCalendarEventDef } from "@/lib/wedding-calendar-events";

function escapeIcsText(s: string): string {
  return s
    .replace(/\r\n/g, "\n")
    .replace(/\r/g, "\n")
    .replace(/\\/g, "\\\\")
    .replace(/\n/g, "\\n")
    .replace(/;/g, "\\;")
    .replace(/,/g, "\\,");
}

function foldLine(line: string): string[] {
  const max = 75;
  if (line.length <= max) return [line];
  const out: string[] = [];
  let rest = line;
  while (rest.length > max) {
    out.push(rest.slice(0, max));
    rest = ` ${rest.slice(max)}`;
  }
  if (rest.length) out.push(rest);
  return out;
}

function pushFolded(lines: string[], raw: string) {
  for (const part of foldLine(raw)) {
    lines.push(part);
  }
}

/** DTSTAMP theo UTC, dạng yyyyMMddTHHmmssZ */
export function formatIcsDtStamp(date: Date): string {
  return `${date.toISOString().replace(/[-:]/g, "").split(".")[0]}Z`;
}

export function buildIcsEvent(def: WeddingCalendarEventDef, dtstamp: string): string {
  const lines: string[] = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//DamCuoiChiGai//VI//NONSGML",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `UID:${def.uid}`,
    `DTSTAMP:${dtstamp}`,
    `DTSTART:${def.dtStartUtc}`,
    `DTEND:${def.dtEndUtc}`,
  ];

  pushFolded(lines, `SUMMARY:${escapeIcsText(def.summary)}`);
  pushFolded(lines, `DESCRIPTION:${escapeIcsText(def.description)}`);
  pushFolded(lines, `LOCATION:${escapeIcsText(def.location)}`);
  if (def.url) {
    lines.push(`URL:${def.url}`);
  }

  for (const alarm of def.alarms ?? []) {
    lines.push("BEGIN:VALARM", `TRIGGER:${alarm.trigger}`, "ACTION:DISPLAY");
    pushFolded(lines, `DESCRIPTION:${escapeIcsText(alarm.description)}`);
    lines.push("END:VALARM");
  }

  lines.push("END:VEVENT", "END:VCALENDAR");
  return lines.join("\r\n");
}
