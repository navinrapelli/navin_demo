import React, { PureComponent } from 'react'

 class PureCompon extends PureComponent {
     constructor(props) {
         super(props)

         const time= new Date()
         const day1=time.toLocaleTimeString()

         this.state = {
              time1:day1
         }
     }

     componentDidMount()
     {    const time= new Date()

        const day12=time.toLocaleTimeString()

           setInterval(() => this.tick()


            
            
        , 1000);
     }

    
     
    tick() {
      const n=new Date();
      const time=n.toLocaleTimeString()
      this.setState({
        time1:time
      });
    }
     
     
    render() {
        return (
            <div>
                {this.state.time1}
            </div>
        )
    }
}

export default PureCompon
