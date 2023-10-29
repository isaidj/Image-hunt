import ImageProps from "@/utils/imagePropsInterface";
import Image from "next/image";
import Link from "next/link";
import ImageCard from "./imageCards/ImageCard";
const ImagesSectionHorizontal = ({
  images,
  loading,
}: {
  images: ImageProps[];
  loading: boolean;
}) => {
  if (loading) {
    return <Skeleton count={8} height={400} width={"100%"} />;
  }
  if (loading === false && images.length === 0) {
    return <h1>No hay resultados</h1>;
  }
  return images.map((img, index) => {
    return (
      <Link
        key={img.id}
        href={`/photos/${img.slug}`}
        scroll={false}
        className="relative"
      >
        <ImageCard
          img={img}
          props={{
            className:
              "card mb-3  relative rounded-2xl cursor-pointer animate-fade-in object-cover w-full h-full",
          }}
        />
      </Link>
    );
  });
};
export default ImagesSectionHorizontal;
const Skeleton = ({ count, height, width }: any) => {
  return (
    <>
      {Array(count)
        .fill("")
        .map((_, i) => (
          <div
            key={i}
            className="card mb-3  relative rounded-2xl cursor-pointer animate-pulse bg-gray-900"
            style={{ height, width }}
          />
        ))}
    </>
  );
};
