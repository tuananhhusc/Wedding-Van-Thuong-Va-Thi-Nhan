import {
  WEDDING_CALENDAR_EVENTS,
} from "@/lib/wedding-calendar-events";
import { buildIcsEvent, formatIcsDtStamp } from "@/lib/build-ics";

export async function GET(
  _request: Request,
  context: { params: Promise<{ event: string }> },
) {
  const { event } = await context.params;
  const def = WEDDING_CALENDAR_EVENTS[event];
  if (!def) {
    return new Response("Not found", { status: 404 });
  }

  const body = buildIcsEvent(def, formatIcsDtStamp(new Date()));

  return new Response(body, {
    status: 200,
    headers: {
      "Content-Type": "text/calendar; charset=utf-8",
      "Content-Disposition": `attachment; filename="${def.filename}"`,
      "Cache-Control": "private, no-store",
    },
  });
}

export async function generateStaticParams() {
  return [
    { event: "church" },
    { event: "le-vu-quy" },
    { event: "le-thanh-hon" },
  ];
}
