import {useState} from "react"

function AddTask({onAdd}) {

    const [text,setText] = useState("")
    const [day,setDay] = useState("")
    const [reminder,setReminder] = useState(false)


    const submit = (e) => {
        e.preventDefault()
        
        if(!text){
            alert("please enter task")
        }
        onAdd({text,day,reminder})
        setText('')
        setDay('')
        setReminder(false)
    }

  return (
    <form className='add-form' onSubmit={submit}>
        <div className="form-control">
            <label>Task</label>
            <input type="text" placeholder="Add Task" value={text} onChange={(e)=>setText(e.target.value)} />
        </div>
        <div className="form-control">
            <label>Date & time</label>
            <input type="text" placeholder="Add date & time" value={day} onChange={(e)=>setDay(e.target.value)} />
        </div>
        <div className="form-control form-control-check">
            <label>Set Reminder</label>
            <input type="checkbox" value={reminder} onChange={(e)=>setReminder(e.currentTarget.checked)} />
        </div>
        <input type="submit" value="save Task" className="btn btn-block"/>
    </form>
  )
}

export default AddTask