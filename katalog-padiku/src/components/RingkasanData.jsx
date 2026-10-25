function RingkasanData(props) {
    return (
    <div className="alert alert-success">
        saat ini terdapat <strong>{props.total}</strong> artikel di padiku.
    </div>
    );
}

export default RingkasanData;