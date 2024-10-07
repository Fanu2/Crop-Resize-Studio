# 📸 Crop-Resize-Studio

A powerful web-based image and video manipulation tool that allows users to easily crop, resize, and perform various operations on their media files directly from the browser. Built with **Next.js**, this tool offers fast, intuitive image manipulation with a beautiful user interface.

![Crop-Resize-Studio Banner](./public/banner.png)

## 🚀 Features

- **Image Cropping**: Crop images into any shape or size.
- **Image Resizing**: Easily resize images with predefined dimensions or custom sizes.
- **Circular Image Cropping**: Create beautiful circular images with just a few clicks.
- **Composite Image Creation**: Combine multiple images into a seamless composite.
- **Drag & Drop Support**: Drag and drop files to begin editing immediately.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Lightweight & Fast**: No backend dependency required for image manipulation.
- **Supports Multiple Formats**: PNG, JPEG, and more.
  
## 🎯 Tech Stack

- **Frontend**: React, Next.js, CSS-in-JS (Styled Components)
- **Image Manipulation**: [PIL (Python Imaging Library)](https://pillow.readthedocs.io/) on the backend
- **Deployment**: Vercel / Netlify

## 🔧 Installation and Setup

To get started locally, follow these simple steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/Fanu2/Crop-Resize-Studio.git
    cd Crop-Resize-Studio
    ```

2. **Install the dependencies:**

    ```bash
    npm install
    ```

3. **Run the development server:**

    ```bash
    npm run dev
    ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## 🌟 Usage

Once the server is running, you can:

- Upload images using the drag & drop area or file selector.
- Crop images by selecting a region and apply circular crops.
- Resize images using either predefined dimensions or custom sizes.
- Generate a composite of multiple images and download the output.

### Example of Cropping and Resizing

![Cropping Example](./public/cropping-example.gif)

## 📂 Folder Structure

```bash
.
├── components
│   ├── ImageCropper.js     # Component for image cropping functionality
│   └── ImageResizer.js     # Component for image resizing functionality
├── pages
│   ├── api
│   │   └── upload.js       # API for handling image upload
│   └── index.js            # Main page for the app
├── public
│   └── banner.png          # Project banner image
├── styles
│   └── globals.css         # Global styles for the app
└── README.md               # Project documentation
```

## 💻 API Routes

### `/api/upload`
- **Method**: `POST`
- **Description**: Endpoint for handling image upload. Returns a cropped or resized image in response.

### `/api/resize`
- **Method**: `POST`
- **Description**: Endpoint for resizing images. Accepts custom dimensions.

## 🛠️ Built Using

- [React](https://reactjs.org/) - Frontend JavaScript library
- [Next.js](https://nextjs.org/) - The React Framework for Production
- [PIL (Python Imaging Library)](https://pillow.readthedocs.io/) - Backend image processing
- [Styled Components](https://styled-components.com/) - CSS-in-JS for styling
- [Vercel](https://vercel.com/) - Cloud platform for static sites

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check out the [issues page](https://github.com/Fanu2/Crop-Resize-Studio/issues).

To contribute:

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a pull request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

### 🌐 Live Demo

You can try out the live version of **Crop-Resize-Studio** [here](https://crop-resize-studio.vercel.app/).

---

Happy Coding! 🎨
