const Footer = () => {
    return (
    <div className="bg-gray-800 py-10">
        <div className="container mx-auto flex justify-between items-center">
            <span className="text-3xl text-white font-bold tracking-tight">
                BookInn.com
            </span>
            <span className="text-white font-bold tracking-tight flex gap-4">
                <p className="cursos-pointer">
                    Privacy Policy
                </p>
                <p className="cursos-pointer">
                    Terms of Service
                </p>
            </span>
        </div>
    </div>
    );
};

export default Footer;