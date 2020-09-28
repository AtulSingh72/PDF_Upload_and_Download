var hard_btn = document.getElementById('hard');
var pdf_btn = document.getElementById('pdf');
var file = document.getElementById('file');
var url = document.getElementById('url');
function hard() {
    hard_btn.classList.add('btn-primary');
    hard_btn.classList.remove('btn-secondary');
    pdf_btn.classList.add('btn-secondary');
    pdf_btn.classList.remove('btn-primary');
    file.style.display = "initial";
    url.style.display = "none";
}
function pdf()
{
    hard_btn.classList.add('btn-secondary');
    hard_btn.classList.remove('btn-primary');
    pdf_btn.classList.add('btn-primary');
    pdf_btn.classList.remove('btn-secondary');
    file.style.display = "none";
    url.style.display = "initial";
}