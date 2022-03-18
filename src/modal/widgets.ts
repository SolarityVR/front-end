export interface HotWidget {
  title: string;
  subtitle?: string;
  graph: {
    type: "up" | "down";
    value: number;
  };
}
