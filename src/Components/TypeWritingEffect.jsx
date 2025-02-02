import Typewriter from "typewriter-effect"


const TypeWritingEffect = () => {
  return (
    <div>
        <Typewriter
          options={{
            strings:[
                "Backend Developer",
                "ReactJs Developer",
                "Problem Solver"
            ],
            autoStart:true,
            loop:true,
            deleteSpeed:50
          }}
        />
        
    </div>
  )
}

export default TypeWritingEffect