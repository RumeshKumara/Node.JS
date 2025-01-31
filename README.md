In Node.js, the **`os` module** (short for "Operating System") is a **built-in core module** that provides utilities for interacting with the operating system. It allows you to retrieve information about the system’s hardware, network interfaces, user environment, and more. You don’t need to install it separately—it comes bundled with Node.js.

---

### **Key Features of the `os` Module**
Here’s a breakdown of the most useful methods and properties

| **Method/Property**       | **Description**                                                                 | **Example**                          |
|---------------------------|---------------------------------------------------------------------------------|--------------------------------------|
| `os.platform()`           | Returns the OS platform (e.g., `'linux'`, `'darwin'` (macOS), `'win32'`).      | `os.platform()` → `'linux'`          |
| `os.arch()`               | Returns the CPU architecture (e.g., `'x64'`, `'arm'`).                         | `os.arch()` → `'x64'`                |
| `os.cpus()`               | Returns an array of CPU cores (model, speed, times).                           | `os.cpus().length` → `8` (8 cores)   |
| `os.totalmem()`           | Total system memory in bytes.                                                  | `os.totalmem()` → `17179869184` (16GB)|
| `os.freemem()`            | Free memory in bytes.                                                          | `os.freemem()` → `4294967296` (4GB)  |
| `os.homedir()`            | Path to the current user’s home directory.                                     | `os.homedir()` → `/home/user`        |
| `os.hostname()`           | Hostname of the system.                                                        | `os.hostname()` → `mypc`             |
| `os.networkInterfaces()`  | Returns network interfaces (IP addresses, MAC, etc.).                          | `os.networkInterfaces().eth0`        |
| `os.uptime()`             | System uptime in seconds.                                                      | `os.uptime()` → `86400` (1 day)      |
| `os.userInfo()`           | Returns info about the current user (username, shell, home directory).         | `os.userInfo().username` → `john`    |
| `os.type()`               | Returns the OS name (e.g., `'Linux'`, `'Windows_NT'`, `'Darwin'`).             | `os.type()` → `'Linux'`              |
| `os.release()`            | Returns the OS release version.                                                | `os.release()` → `5.15.0-76-generic` |
| `os.EOL`                  | End-of-line marker for the OS (`\r\n` on Windows, `\n` on POSIX).              | `os.EOL` → `\n` (Linux/macOS)        |

---


