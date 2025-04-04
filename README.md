## caj转pdf

基于Tauri的caj转pdf

发行版仅在 Win11 上测试过。如果在其他系统上无法运行，请自行下载源码并编译。重新编译可参考此网站：[Windows Installer | Tauri - Tauri Framework](https://v2.tauri.org.cn/distribute/windows-installer/)（尤其是Win7）。

目前仍有许多不尽人意的地方，请多多包涵。**如有任何问题或好的建议，皆可通过 issue 提出。**

使用程序时，请**不要重命名**caj2pdf.exe同目录下的t1.exe和t2.exe也不要移动位置！

目前的bug，pdf会被转换成pdf，然后在尾部加上.pdf的后缀，因为我没有对文件类型做进一步的限制（1.pdf会被成功的转换成1.pdf.pdf）
<br>
<br>
<br>
<br>



## caj2pdf
CAJ file convert to PDF, based on Tauri

The release version has only been tested on the Windows 11 system. If it does not work on other systems, please download the source code and compile it yourself. You can refer to this website: [Windows Installer | Tauri - Tauri Framework](https://v2.tauri.org.cn/distribute/windows-installer/) (especially if you are using a Windows 7 system).

There are still many areas that are not satisfactory. Please bear with me. **Any questions or good suggestions can be sent to the issue.**

When using the program, please **do not rename** t1.exe and t2.exe in the same directory as caj2pdf.exe, and do not move them!

Currently, there is a bug where PDFs are converted into PDFs again and then have a .pdf suffix appended to the end. This is because I haven't further restricted the file types (for example, 1.pdf will be successfully converted into 1.pdf.pdf).


没有后缀也能够转换

![PixPin_2025-04-04_19-09-13](https://github.com/user-attachments/assets/5e7b89ef-4398-43fc-9fc2-b98a1627feb8)


