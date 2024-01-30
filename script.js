function displayTime() {
    let element = document.getElementById("clock"); // ����� ������� � id="clock" 
    let now = new Date();    // �������� ������� �����
    element.innerHTML = now.toLocaleTimeString(); // ���������� �����
    setTimeout(displayTime, 1000);    // �������� ������� ������ �������
}
window.onload = displayTime; // ������ ����������� ������� ����� �������� ���������
function show ( name )
{
  var elem = document.getElementById(name); 
  if ( elem ) 
    elem.style.display = "block";
}


