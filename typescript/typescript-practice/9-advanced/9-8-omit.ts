// Pick 과 반대로 원하는것을 뺄 수 있다.
type Video = {
  id: string;
  title: string;
  url: string;
  data: string;
};

// 기존에 Video 타입에서 url과 data를 빼고 사용
// 기존 타입에 없는 key여도 전달 가능
type VideoMetadata = Omit<Video, "url" | "data">;
function getVideo(id: string): Video {
  return {
    id,
    title: "video",
    url: "https://",
    data: "byte-data",
  };
}

function getVideoMetadata(id: string): VideoMetadata {
  return {
    id: id,
    title: "title",
  };
}
