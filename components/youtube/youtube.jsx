import { YouTubeEmbed } from "@next/third-parties/google";
export default function YoutubeVideo({ video }) {
  return <YouTubeEmbed videoid="s99YmxKqkDE" params="controls=0" />;
}
