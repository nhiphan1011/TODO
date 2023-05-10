import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ListView, listAction, selectList } from 'module/list'

function ListContainer() {
    const dispatch = useDispatch()
    const { data } = useSelector(selectList)
    const [value, setValue] = useState('')
    const handleChange = (e: any) => setValue(e.target.value)
    const handleUpdate = (e: any) => {
        e.preventDefault()
        if (value) dispatch(listAction.update(value))
        setValue('')
    }
    const handleDelete = (e: any, index: number) => {
        e.preventDefault()
        dispatch(listAction.delete(index))
    }
    return (<ListView value={value} list={data} handleChange={handleChange} handleUpdate={handleUpdate} handleDelete={handleDelete} />);
}

export default ListContainer;