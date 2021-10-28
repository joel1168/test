import "./createcall.css"

export default function CreateCall() {
  return (
    <div className="cc_container">
      <h2 className="page_name">Start Call</h2>
      <div className="create_call">
        <form class="item">
          <label className="label_padding"><span className="title_padding">Meeting Title *</span>
            <input type="text" className="input_1" required />
          </label>
          <label className="label_padding"><span className="title_padding">Meeting Description (optional)</span>
            <input type="text" className="input_1" />
          </label>
          <label className="flex">
            <span className="inline">Date</span>
            
            <input type="date" className="date_input" required />
          </label>
          <label for="appt" className="flex">
            <span className="inline">Time</span>
          <input type="time" className="time_input" required />
          </label>

          
          <div class="btns"> 
            <input type="submit" className="create_button" value="CREATE" />
          </div>

        </form>

      </div>
    </div>
  )
}
