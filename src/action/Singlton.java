class Singlton {


    Object lock = new Object()

    private Singlton() {

    }

    private static Singlton instance;

    public static getInstance() {

        syncronized (lock){
            if(null == instance)
            instance = new  Singlton();
        }

        return instance;
    }
}