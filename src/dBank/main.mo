import Debug "mo:base/Debug";
import Time "mo:base/Time";
import Float "mo:base/Float";

actor DBank{
  stable var currentValue: Float = 400;
  currentValue:=500;

  stable var startTime = Time.now();
  let id= 123123213;
  // Debug.print(debug_show(id));

  public func topUp(amount: Float) {
    currentValue += amount;
    Debug.print(debug_show(currentValue));
  };

  public func withdrawl(amount: Float){
    let temp: Float = currentValue - amount;
    if (temp>=0){
          currentValue -=amount;
          Debug.print(debug_show(currentValue));
    }
    else{
      Debug.print("Enter amount smaller than");
      Debug.print(debug_show(currentValue));
    }; 

  };

  public query func checkBalance(): async Float{

    return currentValue;

  };

  public func compound(){
    let currentTime = Time.now();
    let timeElaspedNS = currentTime-startTime;
    let timeElaspedS = timeElaspedNS/1000000000;
    currentValue:= currentValue*(1.01**Float.fromInt(timeElaspedS));
    startTime:=currentTime;
  };
}