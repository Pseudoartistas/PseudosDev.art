import Header from './components/header';
import Footer from './components/footer';
import Carousel from '../app/components/carousel';

export default function Home() {
	return (
		<main className="flex flex-col min-w-screen min-h-screen colorsBase overflow-x-hidden lg:px-24 md:px-16 px-5">
			<Header/>
			<section>
				<Carousel/>
			</section>
			<Footer/>
		</main>
	);
}