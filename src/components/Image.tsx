interface ImageProps {
  src: string;
}

const Image = ({ src }: ImageProps) => {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
      <img
        src={src}
        className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover transform group-hover:scale-110 transition-transform duration-500"
        alt="Earth landscape"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
};

export default Image;
