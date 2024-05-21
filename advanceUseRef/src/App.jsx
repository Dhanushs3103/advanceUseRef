// packages
import { useRef, useEffect, useState} from "react";


// local imports

function App() {
  // mainting the form data 
  const [formData, setFormData] = useState({
    name: "",
    hobby: "",
    city: "",
    country: "",
  });
  // mainting the multiple refs
  let ref1 = useRef("");
  let ref2 = useRef("");
  let ref3 = useRef("");
  let ref4 = useRef("");

  useEffect(() => {
    ref1.current.focus();
    // ref2.current.focus();
    // ref3.current.focus();
    // ref4.current.focus();
  }, []);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log("form submitted with data", formData);
    ref1.current.value ="";
    ref2.current.value ="";
    ref3.current.value ="";
    ref4.current.value ="";
    ref1.current.focus(); 

  }

  return (
    <>
      <h4>Enter Details</h4>
      <form onSubmit={handleSubmit}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "200px",
            gap: "10px",
          }}
        >
          <input type="text" placeholder="Enter name" ref={ref1} name="name" value={formData.name} onChange={handleChange} />
          <input type="text" placeholder="Enter hobby" ref={ref2} name="hobby" value={formData.hobby} onChange={handleChange} />
          <input type="text" placeholder="Enter city" ref={ref3} name="city" value={formData.city} onChange={handleChange}/>
          <input type="text" placeholder="Enter country" ref={ref4} name="country" value={formData.country} onChange={handleChange} />
          <input type="submit" />
        </div>
      </form>
    </>
  );
}

export default App;
