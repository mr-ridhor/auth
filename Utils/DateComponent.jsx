import React from 'react'

const DateComponent = ({selectDate,setSelectDate, selectMonth,setSelectMonth,selectYear,setSelectYear,  onDateChange}) => {
    const date=[];
    for(let i=1; i <= 31; i++){
        date.push(
            <option key={i} value={i}>
                {i}
            </option>
        )

    }
    const monthNames=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"]
    const months=[]
    for(let i=0; i<monthNames.length;i++){
        months.push(
            <option key={i} value={i + 1}>
            {monthNames[i]}
            </option>
        )
    }
    const year=[]
    const currentYear= new Date().getFullYear() -18;
    for (let i=currentYear; i >= currentYear -100; i--){
        year.push(
            <option key={i} value={i}>
                {i}
            </option>
        )
    }
   const handleDate=(e)=>{
    setSelectDate(e.target.value)
    handleDateChange();
   }
   const handleMonth=(e)=>{
    setSelectMonth(e.target.value)
    handleDateChange();
   }
   const handleYear=(e)=>{
    setSelectYear(e.target.value)
    handleDateChange();
   }
   const handleDateChange = () => {
    if (selectDate && selectMonth && selectYear) {
      const formattedDate = `${selectYear}-${selectMonth.toString().padStart(2, '0')}-${selectDate.toString().padStart(2, '0')}`;
      onDateChange(formattedDate);
    }
  };
  return (
    <div className="w-full flex justify-between gap-2">
        <select value={selectDate} onChange={handleDate}
        className="focus:outline-none border-2 w-full text-xs md:text-base rounded-lg p-2"
        >
            <option>Day</option>
            {date}
        </select>
        <select value={selectMonth} onChange={handleMonth}
        className="focus:outline-none  border-2 w-full text-xs md:text-base rounded-lg p-2"
        >
            <option>Month</option>
            {months}
        </select>
        <select value={selectYear} onChange={handleYear}
        className="focus:outline-none  border-2 w-full text-xs md:text-base rounded-lg p-2"
        >
            <option>Year</option>
            {year}
        </select>
    </div>
  )
}

export default DateComponent