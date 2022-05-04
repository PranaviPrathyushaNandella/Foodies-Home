import React, { useState, Component } from "react";
import TimePicker from "@mui/lab/TimePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import TextField from "@mui/material/TextField";
// import { ClockPicker } from "@mui/x-date-pickers/ClockPicker";
import moment from "moment"


// const isBeforeTime = (time1, time2) =>
//   time1.minutes() + time1.hours() * 60 < time2.minutes() + time2.hours();

// export default class TimeRangePicker extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       value1: props.value.clone(),
//       value2: props.value.clone().add(props.minuteStep, "minutes"),
//     };
//   }

//   handleValueChange1 = (value1) => {
//     if (!value1) {
//       this.setState({
//         value1,
//       });
//       return;
//     }
//     this.setState((previousState) => ({
//       value1: value1.clone(),
//       value2:
//         previousState.value2 && isBeforeTime(value1, previousState.value2)
//           ? previousState.value2.clone()
//           : value1.clone().add(this.props.minuteStep, "minutes"),
//     }));
//   };

//   handleValueChange2 = (value2) => {
//     if (!value2) {
//       this.setState({
//         value2,
//       });
//       return;
//     }
//     this.setState((previousState) => ({
//       value1:
//         previousState.value1 && isBeforeTime(previousState.value1, value2)
//           ? previousState.value1.clone()
//           : value2.clone().subtract(this.props.minuteStep, "minutes"),
//       value2: value2.clone(),
//     }));
//   };

//   render() {
//     const { value1, value2 } = this.state;
//     return (
//       <div>
//         <LocalizationProvider dateAdapter={AdapterDateFns}>
//           <TimePicker
//             value={value1}
//             disabledHours={() => this.props.disabledHours}
//             minuteStep={this.props.minuteStep}
//             showSecond={false}
//             onChange={this.handleValueChange1}
//           />
//           <TimePicker
//             value={value2}
//             disabledHours={() => this.props.disabledHours}
//             minuteStep={this.props.minuteStep}
//             showSecond={false}
//             onChange={this.handleValueChange2}
//           />
//         </LocalizationProvider>
//       </div>
//     );
//   }
// }

// TimeRangePicker.defaultProps = {
//   disabledHours: [0, 1, 2, 3, 4, 5, 6, 7],
//   value: moment()
//     .set("hours", 8)
//     .set("minutes", 0),
//   minuteStep: 30,
// };


export default function Timepick(){

    const [value, setValue] = useState(new Date());

    const handleChange = (newValue) => {
      setValue(newValue);
    };
    return (
      //<h1>Choose time</h1>
      //
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <TimePicker
          label="Time"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
          locale="sv-sv"
        />
      </LocalizationProvider>
      //</div><br/>
    );

}

// export default function SubComponentsTimePickers() {
//   const [date, setDate] = React.useState(new Date());

//   return (
//     <LocalizationProvider dateAdapter={AdapterDateFns}>
//       <ClockPicker date={date} onChange={(newDate) => setDate(newDate)} />
//     </LocalizationProvider>
//   );
// }

// export default function SecondsTimePicker() {
//   const [value, setValue] = React.useState(new Date());

//   return (
//     <LocalizationProvider dateAdapter={AdapterDateFns}>
//       {/* <Stack spacing={3}> */}
//         {/* <TimePicker
//           ampm={false}
//           openTo="hours"
//           views={["hours", "minutes", "seconds"]}
//           inputFormat="HH:mm:ss"
//           mask="__:__:__"
//           label="With seconds"
//           locale="ru"
//           value={value}
//           onChange={(newValue) => {
//             setValue(newValue);
//           }}
//           renderInput={(params) => <TextField {...params} />
//          SecondsTimePicker.defaultProps = {
//               disabledHours: [0, 1, 2, 3, 4, 5, 6, 7, 17, 18, 19, 20, 21, 22, 23],
//               value: moment()
//                 .set("hours", 8)
//                 .set("minutes", 0),
//               minuteStep: 30,
//           };
//         />} */}
//         {/* <TimePicker
//           ampmInClock
//           views={["minutes", "seconds"]}
//           inputFormat="mm:ss"
//           mask="__:__"
//           label="Minutes and seconds"
//           value={value}
//           onChange={(newValue) => {
//             setValue(newValue);
//           }}
//           renderInput={(params) => <TextField {...params} />}
//         /> */}
//       {/* </Stack> */}
//     </LocalizationProvider>
//   );
// }