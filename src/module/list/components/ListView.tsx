interface ILISTVIEW {
    value: string,
    list: Array<string>,
    handleChange: (e: any) => void,
    handleUpdate: (e: any) => void,
    handleDelete: (e: any, index: number) => void
}
function ListView({ list, value, handleChange, handleUpdate, handleDelete }: ILISTVIEW) {
    return (
        <form style={{ marginTop: "10px" }} onSubmit={handleUpdate}>
            <input value={value} onChange={handleChange} name="input" type="text" />
            <input type="submit" value='Update' />
            <h2>List :</h2>
            {list.length > 0 ? list.map((item, index) => (
                <div key={index}>
                    <span style={{ margin: '10px' }}>{item}</span>
                    <button onClick={(e) => handleDelete(e, index)}>Delete</button>
                </div>)) : "No data"}
        </form>
    );
}

export default ListView;