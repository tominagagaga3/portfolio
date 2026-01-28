export const planInfo = [
  {
    label: "Standard",
    price: "300円/時間",
    free_seat_access: true,
    silent_booth_access: true,
    meeting_room_access: false,
    event_space_access: true,
    free_drinks_service: true,
    snack_service: true,
    partner_cafe_discount: false,
    high_speed_wifi: false,
    unlimited_print_copy: true,
    scanner_access: true,
    monitor_rental: true,
    projector_rental: false,
  },
  {
    label: "Premium",
    price: "600円/時間",
    free_seat_access: true,
    silent_booth_access: true,
    meeting_room_access: false,
    event_space_access: true,
    free_drinks_service: true,
    snack_service: true,
    partner_cafe_discount: false,
    high_speed_wifi: false,
    unlimited_print_copy: true,
    scanner_access: true,
    monitor_rental: true,
    knowledge_mail_magazine: true,
    projector_rental: false,

  },
  {
    label: "Executive",
    price: "900円/時間",
    free_seat_access: true,
    silent_booth_access: true,
    meeting_room_access: true,
    event_space_access: true,
    free_drinks_service: true,
    snack_service: true,
    partner_cafe_discount: true,
    high_speed_wifi: true,
    unlimited_print_copy: true,
    scanner_access: true,
    monitor_rental: true,
    knowledge_mail_magazine: true,
    projector_rental: true,

  },
];

export const seatAccessList = [
  {
    label: "フリー席の利用",
    id: "free_seat_access",
    },
  {
    label: "集中ブース（サイレント席）の利用",
    id: "silent_booth_access",
    },
  {
    label: "ミーティングルーム利用",
    id: "meeting_room_access",
    },
  {
    label: "イベントスペース利用権",
    id: "event_space_access",
    },
] as const;

export const foodAndDrinkServicesList = [
  {
    label: "フリードリンク ",
    id: "free_drinks_service",
    },
  {
    label: "軽食サービス",
    id: "snack_service",
    },
  {
    label: "提携カフェ割引",
    id: "partner_cafe_discount",
    },
] as const;

export const workspaceAmenitiesList = [
  {
    label: "高速Wi-Fi ",
    id: "high_speed_wifi",
    },
  {
    label: "コピー・プリント利用（無制限）",
    id: "unlimited_print_copy",
    },
  {
    label: "スキャナー利用",
    id: "scanner_access",
    },
] as const;

export const equipmentRentalList = [
  {
    label: "モニター貸出 ",
    id: "monitor_rental",
    },
  {
    label: "プロジェクター貸出",
    id: "projector_rental",
    },
] as const;


