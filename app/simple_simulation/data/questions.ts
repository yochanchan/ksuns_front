export type AnswerType = "single" | "multi";

export type QuestionId =
  | "q1"
  | "q2"
  | "q3"
  | "q4"
  | "q5"
  | "q6"
  | "q7"
  | "q8"
  | "q9"
  | "q10"
  | "q11"
  | "q12";

export type QuestionOption = {
  value: string;
  label: string;
  isUnknown?: boolean;
};

export type Question = {
  id: QuestionId;
  number: number;
  title: string;
  prompt: string;
  type: AnswerType;
  options: QuestionOption[];
};

export const OPTION_ICONS: Record<string, LucideIcon> = {
  office_workers: Briefcase,
  local_families: Home,
  solo_diners: User,
  couples: Heart,
  tourists: Globe2,
  students: GraduationCap,
  undecided_audience: HelpCircle,

  casual: Smile,
  calm: Leaf,
  lively: PartyPopper,
  luxury: Gem,
  female_friendly: Sparkles,
  family_friendly: Baby,
  undecided_mood: HelpCircle,

  after_work_drink: Beer,
  full_meal: UtensilsCrossed,
  celebration: Cake,
  group_party: Users,
  family_outing: Home,
  second_bar: Martini,
  undecided_scene: HelpCircle,

  everyday_spot: Coffee,
  special_day: Gift,
  regulars: Handshake,
  drink_focused: Wine,
  healthy: HeartPulse,
  quick_service: Timer,
  undecided_concept: HelpCircle,

  up_to_2000: Wallet,
  "2001_to_3000": Wallet,
  "3001_to_4000": Wallet,
  "4001_to_6000": Wallet,
  "6001_to_8000": Wallet,
  over_8001: Wallet,
  undecided_budget: HelpCircle,

  izakaya: Beer,
  japanese: Soup,
  yakitori: Drumstick,
  yakiniku: Flame,
  ramen: Soup,
  curry_ethnic: CookingPot,
  french: ChefHat,
  italian: Pizza,
  bistro: Wine,
  cafe: Coffee,
  sweets: CakeSlice,
  bar: Martini,
  undecided_cuisine: HelpCircle,

  draft_beer: Beer,
  japanese_sake: FlaskRound,
  wine_lineup: Wine,
  cocktails: Martini,
  non_alcohol: GlassWater,
  food_focus: Utensils,
  undecided_drink: HelpCircle,

  up_to_8: Home,
  "9_to_16": Store,
  "17_to_24": Building,
  "25_to_40": Building2,
  "41_plus": Factory,
  two_or_more_shops: Building2,
  undecided_scale: HelpCircle,

  near_station: TrainFront,
  office_area: Building,
  residential_area: Home,
  shopping_street: Store,
  tourist_area: Camera,
  suburban: Trees,
  undecided_location: HelpCircle,

  morning_to_lunch: Sunrise,
  lunch_to_cafe: Sun,
  dinner: Sunset,
  dinner_to_midnight: MoonStar,
  late_night: Moon,
  all_day: Clock3,
  undecided_hours: HelpCircle,

  food_quality: ChefHat,
  affordable: BadgePercent,
  comfort: Sofa,
  staff_distance: MessageCircle,
  hygiene: ShieldCheck,
  local_connection: HeartHandshake,
  undecided_values: HelpCircle,

  loyal_customers: Users,
  stable_revenue: TrendingUp,
  healthy_work: Clock3,
  high_reviews: Sparkles,
  local_reputation: Megaphone,
  second_store_plan: Rocket,
  undecided_success: Trophy,
};

export const QUESTIONS: Question[] = [
  {
    id: "q1",
    number: 1,
    title: "来てほしいお客さんのイメージ",
    prompt: "開業したお店には、どんなお客さんに一番来てほしいですか？",
    type: "single",
    options: [
      { value: "office_workers", label: "仕事帰りの会社員" },
      { value: "local_families", label: "地元の家族連れ" },
      { value: "solo_diners", label: "ひとりで静かに食事・お酒を楽しみたい人" },
      { value: "couples", label: "カップル・夫婦" },
      { value: "tourists", label: "観光客・インバウンドのお客さん" },
      { value: "students", label: "学生・若者が中心" },
      { value: "undecided_audience", label: "まだ決まっていない", isUnknown: true },
    ],
  },
  {
    id: "q2",
    number: 2,
    title: "お店の雰囲気イメージ",
    prompt: "あなたのお店は、どんな雰囲気のお店にしたいですか？",
    type: "single",
    options: [
      { value: "casual", label: "カジュアルで入りやすい雰囲気" },
      { value: "calm", label: "落ち着いてゆっくり過ごせる雰囲気" },
      { value: "lively", label: "賑やかでワイワイ楽しめる雰囲気" },
      { value: "luxury", label: "ちょっと特別感・高級感のある雰囲気" },
      { value: "female_friendly", label: "女性一人でも入りやすい雰囲気" },
      { value: "family_friendly", label: "子ども連れでも安心できる雰囲気" },
      { value: "undecided_mood", label: "まだ決まっていない", isUnknown: true },
    ],
  },
  {
    id: "q3",
    number: 3,
    title: "利用シーンのイメージ",
    prompt: "お店は、どんなシーンで使ってもらいたいですか？",
    type: "single",
    options: [
      { value: "after_work_drink", label: "仕事帰りに軽く一杯飲む場" },
      { value: "full_meal", label: "しっかり食事を楽しむ場" },
      { value: "celebration", label: "記念日やデートで使う場" },
      { value: "group_party", label: "仲間との飲み会・打ち上げの場" },
      { value: "family_outing", label: "家族での外食の場" },
      { value: "second_bar", label: "2軒目・バー使いの場" },
      { value: "undecided_scene", label: "まだ決まっていない", isUnknown: true },
    ],
  },
  {
    id: "q4",
    number: 4,
    title: "お店のコンセプト像",
    prompt: "一言でいうと、あなたのお店はどんなコンセプトが近いですか？",
    type: "single",
    options: [
      { value: "everyday_spot", label: "日常使いできる「普段着」のお店" },
      { value: "special_day", label: "特別な日・ハレの日に行きたいお店" },
      { value: "regulars", label: "地元の常連さんが集まるお店" },
      { value: "drink_focused", label: "お酒を楽しむことが中心のお店" },
      { value: "healthy", label: "ヘルシー志向・健康を意識したお店" },
      { value: "quick_service", label: "スピード重視でサクッと済ませられるお店" },
      { value: "undecided_concept", label: "まだ決まっていない", isUnknown: true },
    ],
  },
  {
    id: "q5",
    number: 5,
    title: "客単価（夜）のイメージ",
    prompt: "夜の1人あたりの予算イメージはどのくらいですか？",
    type: "single",
    options: [
      { value: "up_to_2000", label: "〜2,000円くらい" },
      { value: "2001_to_3000", label: "2,001〜3,000円くらい" },
      { value: "3001_to_4000", label: "3,001〜4,000円くらい" },
      { value: "4001_to_6000", label: "4,001〜6,000円くらい" },
      { value: "6001_to_8000", label: "6,001〜8,000円くらい" },
      { value: "over_8001", label: "8,001円以上" },
      { value: "undecided_budget", label: "まだ決まっていない", isUnknown: true },
    ],
  },
  {
    id: "q6",
    number: 6,
    title: "メインの料理ジャンル",
    prompt: "どんな料理ジャンルのお店にしたいですか？（複数選択可）",
    type: "multi",
    options: [
      { value: "izakaya", label: "居酒屋・おつまみ系" },
      { value: "japanese", label: "和食・割烹・おばんざい" },
      { value: "yakitori", label: "焼き鳥・串焼き" },
      { value: "yakiniku", label: "焼肉・ホルモン" },
      { value: "ramen", label: "ラーメン・つけ麺" },
      { value: "curry_ethnic", label: "カレー・エスニック料理" },
      { value: "french", label: "フレンチ" },
      { value: "italian", label: "イタリアン" },
      { value: "bistro", label: "ビストロ・洋風バル" },
      { value: "cafe", label: "カフェ・軽食・サンドイッチ" },
      { value: "sweets", label: "スイーツ・デザート中心" },
      { value: "bar", label: "バー（お酒中心で料理は軽め）" },
      { value: "undecided_cuisine", label: "まだ決まっていない", isUnknown: true },
    ],
  },
  {
    id: "q7",
    number: 7,
    title: "ドリンクのこだわりどころ",
    prompt: "ドリンクについて、どこに一番こだわりたいですか？",
    type: "single",
    options: [
      { value: "draft_beer", label: "生ビールの種類・質にこだわりたい" },
      { value: "japanese_sake", label: "日本酒・焼酎など「和酒」にこだわりたい" },
      { value: "wine_lineup", label: "ワインのラインナップにこだわりたい" },
      { value: "cocktails", label: "カクテル・サワーのバリエーションにこだわりたい" },
      { value: "non_alcohol", label: "ノンアルコール・ソフトドリンクを充実させたい" },
      { value: "food_focus", label: "ドリンクにはあまりこだわらず、料理を中心にしたい" },
      { value: "undecided_drink", label: "まだ決まっていない", isUnknown: true },
    ],
  },
  {
    id: "q8",
    number: 8,
    title: "座席数／店舗数のイメージ",
    prompt: "開業するとしたら、座席数や将来の店舗数のイメージはどのあたりですか？",
    type: "single",
    options: [
      { value: "up_to_8", label: "〜8席（ごく小さな店）" },
      { value: "9_to_16", label: "9〜16席（小さめの店）" },
      { value: "17_to_24", label: "17〜24席（中くらいの店）" },
      { value: "25_to_40", label: "25〜40席（やや大きめの店）" },
      { value: "41_plus", label: "41席以上（大きめ〜かなり大きな店）" },
      { value: "two_or_more_shops", label: "将来的に2店舗以上の展開も視野に入れている" },
      { value: "undecided_scale", label: "まだ決まっていない", isUnknown: true },
    ],
  },
  {
    id: "q9",
    number: 9,
    title: "出店エリアのイメージ",
    prompt: "お店を出すとしたら、どんな場所に出したいイメージがありますか？",
    type: "single",
    options: [
      { value: "near_station", label: "駅から徒歩5分以内の駅前エリア" },
      { value: "office_area", label: "オフィス街" },
      { value: "residential_area", label: "住宅街の中" },
      { value: "shopping_street", label: "商店街の一角" },
      { value: "tourist_area", label: "観光地・繁華街エリア" },
      { value: "suburban", label: "郊外のロードサイドや郊外型商業施設" },
      { value: "undecided_location", label: "まだ決まっていない", isUnknown: true },
    ],
  },
  {
    id: "q10",
    number: 10,
    title: "営業時間帯のイメージ",
    prompt: "どの時間帯の営業をメインにしたいですか？",
    type: "single",
    options: [
      { value: "morning_to_lunch", label: "朝〜ランチ中心（7〜15時ごろ）" },
      { value: "lunch_to_cafe", label: "ランチ〜カフェ中心（11〜17時ごろ）" },
      { value: "dinner", label: "ディナー中心（17〜22時ごろ）" },
      { value: "dinner_to_midnight", label: "ディナー〜深夜まで（17〜24時ごろ）" },
      { value: "late_night", label: "深夜営業がメイン（22時以降）" },
      { value: "all_day", label: "昼も夜も通しで営業したい" },
      { value: "undecided_hours", label: "まだ決まっていない", isUnknown: true },
    ],
  },
  {
    id: "q11",
    number: 11,
    title: "大事にしたい価値観",
    prompt: "お店作りで、特に大事にしたい価値観はどれですか？",
    type: "single",
    options: [
      { value: "food_quality", label: "料理のクオリティ・おいしさ" },
      { value: "affordable", label: "価格の手頃さ・コスパの良さ" },
      { value: "comfort", label: "居心地の良さ・長居しやすさ" },
      { value: "staff_distance", label: "スタッフとの程よい距離感・会話" },
      { value: "hygiene", label: "衛生面・安全性・安心感" },
      { value: "local_connection", label: "地元とのつながり・地域への貢献" },
      { value: "undecided_values", label: "まだ決まっていない", isUnknown: true },
    ],
  },
  {
    id: "q12",
    number: 12,
    title: "1年後の「成功」イメージ",
    prompt: "開業して1年後、どんな状態になっていたら「成功した」と感じますか？",
    type: "single",
    options: [
      { value: "loyal_customers", label: "常連さんがしっかりついている" },
      { value: "stable_revenue", label: "月々の売上・利益が安定している" },
      { value: "healthy_work", label: "自分やスタッフの働き方に無理がなく、時間も確保できている" },
      { value: "high_reviews", label: "口コミサイトやSNSでの評価が高い" },
      { value: "local_reputation", label: "地域で名前が知られ、指名で来店してもらえている" },
      { value: "second_store_plan", label: "2店舗目・新業態の構想が見えてきている" },
      { value: "undecided_success", label: "まだ決まっていない", isUnknown: true },
    ],
  },
];

export const QUESTION_TOTAL = QUESTIONS.length;

export function getQuestionByNumber(questionNumber: number): Question | undefined {
  return QUESTIONS.find((question) => question.number === questionNumber);
}
import {
  Baby,
  BadgePercent,
  Beer,
  Briefcase,
  Building,
  Building2,
  Cake,
  CakeSlice,
  Camera,
  ChefHat,
  Clock3,
  Coffee,
  CookingPot,
  Drumstick,
  Factory,
  Flame,
  FlaskRound,
  Gem,
  Gift,
  GlassWater,
  Globe2,
  GraduationCap,
  Handshake,
  Heart,
  HeartHandshake,
  HeartPulse,
  HelpCircle,
  Home,
  Leaf,
  Martini,
  Megaphone,
  MessageCircle,
  Moon,
  MoonStar,
  PartyPopper,
  Pizza,
  Rocket,
  ShieldCheck,
  Smile,
  Sofa,
  Sparkles,
  Store,
  Soup,
  Sun,
  Sunrise,
  Sunset,
  Timer,
  TrainFront,
  TrendingUp,
  Trees,
  Trophy,
  User,
  Users,
  Utensils,
  UtensilsCrossed,
  Wallet,
  Wine,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
