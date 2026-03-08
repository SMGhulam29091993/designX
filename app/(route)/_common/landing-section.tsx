import Header from "./header";

const LandingSection = () => {
  return (
    <>
      <div className="w-full min-h-screen">
        <div className="flex flex-col">
          <Header />
          <div className="relative overflow-hidden pt-28">
            <div className="max-w-6xl mx-auto flex flex-col items-center justify-center">
              <div className="space-y-3">
                <h1 className="text-center font-semibold text-4xl tracking-tight sm:text-5xl md:text-6xl">
                  DesignX - Your Ultimate <br className="md:hidden" />{" "}
                  <span className="text-primary">AI Assisstant for Mobile & Web App Design</span>
                </h1>
                <p className="mx-auto max-w-2xl text-center font-medium text-foreground leading-relaxed sm:text-lg">
                  Transform your ideas into stunning app designs in seconds with AI-powered DesignX.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingSection;
