
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check, Mail, AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface NewsletterProps {
  title?: string;
  description?: string;
  buttonText?: string;
  variant?: "default" | "card" | "minimal";
  className?: string;
}

const Newsletter = ({
  title = "Подпишитесь на новости",
  description = "Получайте анонсы новых альбомов, мероприятий и медитативных практик.",
  buttonText = "Подписаться",
  variant = "default",
  className = "",
}: NewsletterProps) => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setStatus("error");
      setErrorMessage("Пожалуйста, введите email");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus("error");
      setErrorMessage("Пожалуйста, введите корректный email");
      return;
    }

    setStatus("loading");
    
    // Имитация отправки запроса на сервер
    setTimeout(() => {
      setStatus("success");
      // В реальном приложении здесь был бы запрос к API
    }, 1500);
  };

  let containerClasses = "";
  let inputContainerClasses = "";
  
  switch(variant) {
    case "card":
      containerClasses = "bg-white dark:bg-slate-800 rounded-xl shadow-md p-6";
      inputContainerClasses = "mt-4";
      break;
    case "minimal":
      containerClasses = "";
      inputContainerClasses = "mt-2";
      break;
    default:
      containerClasses = "bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6";
      inputContainerClasses = "mt-4";
  }

  return (
    <div className={`${containerClasses} ${className}`}>
      {variant !== "minimal" && (
        <>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-slate-600 dark:text-slate-300 mt-2">{description}</p>
        </>
      )}
      
      <div className={inputContainerClasses}>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
          <div className="flex max-w-md">
            <div className="relative flex-grow">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 h-4 w-4" />
              <Input
                type="email"
                placeholder="Ваш email"
                className="pl-9 pr-4 flex-grow border-r-0 rounded-r-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === "loading" || status === "success"}
              />
            </div>
            <Button 
              type="submit" 
              className={`rounded-l-none ${status === "success" ? "bg-green-600 hover:bg-green-700" : "bg-purple-600 hover:bg-purple-700"}`}
              disabled={status === "loading" || status === "success"}
            >
              {status === "loading" ? (
                <div className="h-5 w-5 animate-spin rounded-full border-2 border-t-transparent" />
              ) : status === "success" ? (
                <Check className="h-5 w-5" />
              ) : (
                buttonText
              )}
            </Button>
          </div>
          
          {status === "success" && (
            <Alert className="bg-green-50 text-green-800 border-green-200 dark:bg-green-900/20 dark:text-green-300 dark:border-green-800">
              <Check className="h-4 w-4 mr-2" />
              <AlertDescription>
                Спасибо за подписку! Мы отправили письмо с подтверждением на ваш email.
              </AlertDescription>
            </Alert>
          )}
          
          {status === "error" && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4 mr-2" />
              <AlertDescription>
                {errorMessage}
              </AlertDescription>
            </Alert>
          )}
        </form>
      </div>
      
      {variant !== "minimal" && (
        <p className="text-xs text-slate-500 mt-4">
          Подписываясь, вы соглашаетесь получать наши новости и маркетинговую информацию. 
          Вы можете отписаться в любое время. Мы не передаем ваши данные третьим лицам.
        </p>
      )}
    </div>
  );
};

export default Newsletter;
