function Header(props) {
    return (
        <header className="text-center mb-5">
            <h1 className="text-success fw bold">{props.judul}</h1>
            <p className="text-muted">Website edukasi semua tentang padi</p>
        </header>
    );
}

export default header;