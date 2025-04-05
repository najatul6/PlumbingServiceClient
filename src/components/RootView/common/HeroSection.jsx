
const HeroSection = ({title,subtitle}) => {
  return (
    <section className="bg-[#2c3e50] text-white py-20">
    <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
        <p className="text-xl max-w-3xl mx-auto">
            {subtitle}
        </p>
    </div>
</section>
  )
}

export default HeroSection