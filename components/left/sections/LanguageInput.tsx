
import { LiaLanguageSolid } from "react-icons/lia";

export default function LanguageInput(){
    return (
        <div className="mb-2">
        <div className="flex flex-row space-x-5">
          <span>
            <LiaLanguageSolid color="grey" size={30} />
          </span>
          <span className="text-white text-2xl">Languages</span>
        </div>
        <div className="my-2 flex flex-col">
          <input
            type="text"
            placeholder="Name"
            className="rounded-md w-72 h-8 mb-2"
          />
          <input
            type="text"
            placeholder="Fluency Level"
            className="rounded-md w-72 h-8 mb-2"
          />
        </div>
        {/* Certificate Area */}
        
      </div>
    );
}