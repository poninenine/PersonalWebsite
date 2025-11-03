import Image from "next/image";

export default function Hero() {
    return (
        <div className="relative w-full h-screen">
            <Image
                src="/images/hero.jpg" // Path to your hero image
                alt="Hero Image"
                layout="fill" // Makes the image cover the entire container
                objectFit="cover" // Ensures the image covers the container without distortion
                priority
            />
        </div>
    );
}
