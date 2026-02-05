# TravelTrucks

## 📌 Project Description

TravelTrucks is a web application for browsing and renting campers for travel adventures.  
The project allows users to explore available campers, view detailed information, and manage their browsing experience in a modern, responsive interface.

The application is built with **Next.js**, **TypeScript**, and modern React tools to ensure high performance and scalability.

---

## 🚀 Main Features

- Browse a list of available campers
- View detailed information about each camper
- Responsive and user-friendly UI
- State management with TanStack Query
- Optimized images and fonts
- Favorites functionality (if implemented)

---

## 🛠️ Technologies Used

- Next.js
- React
- TypeScript
- TanStack Query
- CSS Modules
- Google Fonts (Inter)

---

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/your-username/traveltrucks.git

##



# TravelTrucks

## 📌 Project Description

TravelTrucks is a web application for browsing and renting campers for travel adventures.  
The project allows users to explore available campers, view detailed information, and manage their browsing experience in a modern, responsive interface.

The application is built with **Next.js**, **TypeScript**, and modern React tools to ensure high performance and scalability.

---

## 🚀 Main Features

- Browse a list of available campers
- View detailed information about each camper
- User-friendly UI
- State management with TanStack Query
- Optimized images and fonts
- Favorites functionality (if implemented)

---

## 🛠️ Technologies Used

- Next.js
- React
- TypeScript
- TanStack Query
- CSS Modules
- Google Fonts (Inter)

---

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/your-username/traveltrucks.git
cd traveltrucks

Install dependencies:

npm install
# or
yarn install

---

## 🏃‍♂️ Running the Project

Run the project in development mode:

npm run dev

# or

yarn dev

Open http://localhost:3000 in your browser to view the app.

---

## 📦 Build for Production

Build the project for production:

npm run build

# or

yarn build

Start the production server:

npm start

# or

yarn start

---

## 🧩 Usage

Use the main page to browse available campers.

Click on a camper card to view detailed information.

Add favorite campers to "Favorites" (if functionality is enabled).

Use filters to quickly search by type, city, or other parameters.

---

## 🗂️ Project Structure

/ app        # Основні сторінки Next.js та глобальні стилі (app/global.css)
/ components # Повторно використовувані React-компоненти зі своїми CSS Modules
/ lib        # Логіка (API, store)
/ types      # Типи TypeScript
/ public     # Статичні файли (зображення, іконки)

---

## ⚡ TanStack Query & Global State Tips

Use TanStack Query for fetching, caching, and updating API data efficiently.

Wrap your _app.tsx with QueryClientProvider to provide global access to queries.

Use useQuery for GET requests and useMutation for POST/PUT/DELETE operations.

For global state (favorites, filters, etc.), you can combine Zustand or React Context with TanStack Query.

Use isLoading and isError states from queries to handle loading spinners and error messages in the UI.

Example snippet:

const { data, isLoading, isError } = useQuery(['campers', filters], fetchCampers);

if (isLoading) return <Loader />;

if (isError) return <ErrorMessage />;

return <CampersList campers={data} />;

---

## 👤 Author

**Liudmyla Karmeliuk** – [TravelTrucks Repository](https://github.com/lkarm67/traveltrucks-rent)

Feel free to reach out for collaboration or questions.

---

## 📄 License

This project is licensed under the MIT License.
