{
  // 기존에 있는 type에서 내가 원한는것만 골라서 타입으로 만들고 싶을때 pick 사용
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };

  type VideoMetadata = Pick<Video, "id" | "title">;
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
}
