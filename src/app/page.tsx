import Image from 'next/image';



export default function Home() {
    return (
        <div>
            <main>
                <h3>Purple</h3>
            </main>

            <a href="https://github.com/Z-Soriano">
                <Image src="/purple.png" alt="x" width={60} height={60} className="image" />
            </a>
        </div>

    );
}
