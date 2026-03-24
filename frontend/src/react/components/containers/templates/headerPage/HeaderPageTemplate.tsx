import Header from "../../../ui/header/Header";

export default function HeaderPageTemplate( { children }){
     return (
     <>
        <Header />
        <main className="mainLayout">
            <div className="content">
                { children }
            </div>
        </main>
    </>
)}