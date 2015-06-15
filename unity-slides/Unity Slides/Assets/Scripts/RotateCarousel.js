#pragma strict
     
public var amount : float = 90.0;
public var speed : float = 5.0;

private var destPosition : Vector3 = Vector3.zero;
private var currPosition : Vector3;
 
function Start() {
	currPosition = destPosition;
	transform.eulerAngles = destPosition;
}
 
function Update () {
	if (Input.GetKeyDown(KeyCode.RightArrow) ) {
		destPosition.y += -amount;
	}

	if (Input.GetKeyDown(KeyCode.LeftArrow) ) {
		destPosition.y += amount;
	}
	 
	 
	currPosition = Vector3.Lerp(currPosition, destPosition, Time.deltaTime * speed);
	transform.eulerAngles = currPosition;
}