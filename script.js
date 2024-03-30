const main_marks_section = document.querySelectorAll(".main_marks_section");
const subject_table = document.querySelectorAll(".subject_table");

const sub_arr = ["Math","S.st","Science", "English", "Hindi","Computer", "Conversetion","Sanskrit","G.k","Total marks","persentage"]

subject_table.forEach(el => {
    for(let i = 0; i < sub_arr.length; i++){
        let inside_html = el.innerHTML;
        el.innerHTML = inside_html + `<tr><td>${sub_arr[i]}</td></tr>`
    }
})


const exam_type = ["Half yearly", "annual exam"]

main_marks_section.forEach((el,i) => {
    for(let i = 0; i <sub_arr.length-1; i++){
        let inside_html = el.innerHTML;
        el.innerHTML = inside_html + `<tr>
                                                            <td>100</td>
                                                            <td>30</td>
                                                            <td>00</td>
                                                      </tr>`
    }
    el.innerHTML = el.innerHTML + ` <tr><td colspan="3">89%</td></tr>`;
    el.innerHTML =  `<tr><td colspan="3">${exam_type[i]}</td></tr>` + el.innerHTML;
});

