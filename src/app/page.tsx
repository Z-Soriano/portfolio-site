import Image from 'next/image';

export default function Home() {
    return (
        <div>
            <main>
                <footer style={{padding: '20px', textAlign: 'center', backgroundColor: '#f1f1f1'}}>
                    <p>&copy; 2024 My Website. All rights reserved.</p>
                    <p>
                        Follow me on
                        <a href="https://github.com/Z-Soriano" target="_blank" rel="noopener noreferrer">
                            GitHub
                        </a>
                    </p>
                </footer>
            </main>
            <a href="https://github.com/Z-Soriano">
                <Image src="/purple.png" alt="GitHub profile for Z-Soriano" width={400} height={400}/>
            </a>
        </div>
    );
}
