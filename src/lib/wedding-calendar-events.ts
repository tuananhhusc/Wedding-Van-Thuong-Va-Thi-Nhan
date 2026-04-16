/**
 * Định nghĩa sự kiện cho file .ics (Lịch iPhone / Android / Google Calendar…).
 * Thời gian lưu dạng UTC (Z) khớp giờ Việt Nam (UTC+7).
 */

export type WeddingCalendarAlarm = {
  trigger: string; // ví dụ -P1D, -PT1H
  description: string;
};

export type WeddingCalendarEventDef = {
  /** Tên file khi tải về (ASCII, không dấu) */
  filename: string;
  uid: string;
  dtStartUtc: string;
  dtEndUtc: string;
  summary: string;
  description: string;
  location: string;
  /** Bản đồ — gắn vào trường URL của VEVENT */
  url?: string;
  alarms?: WeddingCalendarAlarm[];
};

const MAP_CHURCH =
  "https://www.google.com/maps/place/Nh%C3%A0+th%E1%BB%9D+Gi%C3%A1o+X%E1%BB%A9+Tr%E1%BA%A1i+L%C3%AA/@18.4178942,105.7732459,17z/data=!3m1!4b1!4m6!3m5!1s0x3139b356ae6af28f:0x747fb333ead9b7f7!8m2!3d18.4178891!4d105.7758262!16s%2Fg%2F11bwfm7191";

const MAP_BRIDE_HOME =
  "https://www.google.com/maps/place/Gia%CC%81o+Ho%CC%A3+Vinh+Long/@18.4108224,105.7707017,17z/data=!3m1!4b1!4m6!3m5!1s0x3139b34e3333f69d:0xc6a00b50db6febfd!8m2!3d18.4108173!4d105.773282!16s%2Fg%2F11h9tv6x92";

const MAP_GROOM_HOME =
  "https://www.google.com/maps/place/Nh%C3%A0+Th%E1%BB%9D+Gi%C3%A1o+X%E1%BB%A9+V%C4%83n+H%C3%B2a/@18.3194924,105.8356303,13z/data=!4m9!1m2!2m1!1zVOG7lSBkw6JuIHBo4buRIDE3LCBwaMaw4budbmcgSMOgIEh1eSBU4bqtcCwgdOG7iW5oIEjDoCBUxKluaA!3m5!1s0x313851e2c3c950fb:0xfd516f8e9eafc6ac!8m2!3d18.3195031!4d105.8890802!16s%2Fg%2F11b7kg402v";

const DEFAULT_ALARMS: WeddingCalendarAlarm[] = [
  { trigger: "-P1D", description: "Nhắc nhở: sự kiện diễn ra vào ngày mai." },
  { trigger: "-PT1H", description: "Nhắc nhở: sự kiện bắt đầu sau 1 giờ." },
];

export const WEDDING_CALENDAR_EVENTS: Record<string, WeddingCalendarEventDef> = {
  church: {
    filename: "le-cuoi-giao-xu-trai-le.ics",
    uid: "church-trai-le-20260429@damcuoichigai",
    dtStartUtc: "20260429T123000Z",
    dtEndUtc: "20260429T133000Z",
    summary: "Lễ cưới — Giáo xứ Trại Lê",
    description:
      "Thánh lễ hôn phối — Giuse Nguyễn Văn Thường & Terexa Phạm Thị Nhàn.\nGiờ VN: 19h30, Thứ Tư 29/04/2026.",
    location: "Nhà thờ Giáo xứ Trại Lê, tỉnh Hà Tĩnh",
    url: MAP_CHURCH,
    alarms: DEFAULT_ALARMS,
  },
  "le-vu-quy": {
    filename: "le-vu-quy-nha-gai.ics",
    uid: "vu-quy-20260430@damcuoichigai",
    dtStartUtc: "20260430T023000Z",
    dtEndUtc: "20260430T043000Z",
    summary: "Lễ Vu Quy — Tư Gia Nhà Gái",
    description:
      "Lễ Vu Quy — Giuse Nguyễn Văn Thường & Terexa Phạm Thị Nhàn.\nGiờ VN: 9h30, Thứ Năm 30/04/2026.\nĐịa chỉ: Xóm Ban Long, xã Xuân Lộc, tỉnh Hà Tĩnh.",
    location: "Xóm Ban Long, xã Xuân Lộc, tỉnh Hà Tĩnh",
    url: MAP_BRIDE_HOME,
    alarms: DEFAULT_ALARMS,
  },
  "le-thanh-hon": {
    filename: "le-thanh-hon-nha-trai.ics",
    uid: "thanh-hon-20260502@damcuoichigai",
    dtStartUtc: "20260502T023000Z",
    dtEndUtc: "20260502T043000Z",
    summary: "Lễ Thành Hôn — Tư Gia Nhà Trai",
    description:
      "Lễ Thành Hôn — Giuse Nguyễn Văn Thường & Terexa Phạm Thị Nhàn.\nGiờ VN: 9h30, Thứ Bảy 02/05/2026.\nĐịa chỉ: Tổ dân phố 17, phường Hà Huy Tập, tỉnh Hà Tĩnh.",
    location: "Tổ dân phố 17, phường Hà Huy Tập, tỉnh Hà Tĩnh",
    url: MAP_GROOM_HOME,
    alarms: DEFAULT_ALARMS,
  },
};
