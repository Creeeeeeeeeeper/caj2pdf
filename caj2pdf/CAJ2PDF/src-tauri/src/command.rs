extern crate winapi;
use std::process::Command;
use std::os::windows::process::CommandExt;
use rfd::FileDialog;
use widestring::WideCString;
use std::ptr::null_mut;
use winapi::um::winuser::{MessageBoxW, MB_OK};

#[tauri::command]
pub fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[tauri::command]
pub fn spawn_exe(name: &str) -> Result<String, String> {
    let output = Command::new("cmd")
        .creation_flags(0x08000000)
        .arg("chcp 65001 >nul")
        .arg("&&")
        .arg("/C")
        .arg("t1.exe")
        .arg("convert")
        .arg(format!("{}", name))
        .arg("-m")
        .arg("t2.exe")
        .output()
        .expect("failed to execute process");
    if output.status.success() {
        return Ok(String::from_utf8_lossy(&output.stdout).to_string());
    } else {
        return Ok(String::from_utf8_lossy(&output.stderr).to_string());
    }
}

#[tauri::command]
pub fn get_files() -> Result<String, String> {
    match FileDialog::new().pick_files() {
        Some(paths) => {
            let paths_str: Vec<String> = paths.iter().map(|path| path.display().to_string()).collect();
            Ok(paths_str.join("\n"))
        },
        None => Err(String::from("No file selected"))
    }
}

#[tauri::command]
pub fn converting() {
    let title = WideCString::from_str("提示").unwrap();
    let message = WideCString::from_str("正在转换，请稍候...").unwrap();
    unsafe {
        MessageBoxW(null_mut(), message.as_ptr(), title.as_ptr(), MB_OK);
    }
}