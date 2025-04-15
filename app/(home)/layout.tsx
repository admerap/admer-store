import Footer from '@/components/ui/shared/footer';
import Header from '@/components/ui/shared/header';

export default function HomeLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
  return (
    <div className='flex flex-col min-h-screen'>
        <Header />
        <main className='flex-1 flex flex-col'>{children}</main>
        <Footer />
    </div>
  )
}
