import {
  EventDispatcher,
  Matrix4,
  Plane,
  Raycaster,
  Vector2,
  Vector3
} from "./chunk-HM4QSEEG.js";

// Senior_Project/node_modules/three/examples/jsm/controls/DragControls.js
var _plane = new Plane();
var _raycaster = new Raycaster();
var _pointer = new Vector2();
var _offset = new Vector3();
var _diff = new Vector2();
var _previousPointer = new Vector2();
var _intersection = new Vector3();
var _worldPosition = new Vector3();
var _inverseMatrix = new Matrix4();
var _up = new Vector3();
var _right = new Vector3();
var DragControls = class extends EventDispatcher {
  constructor(_objects, _camera, _domElement) {
    super();
    _domElement.style.touchAction = "none";
    let _selected = null, _hovered = null;
    const _intersections = [];
    this.mode = "translate";
    this.rotateSpeed = 1;
    const scope = this;
    function activate() {
      _domElement.addEventListener("pointermove", onPointerMove);
      _domElement.addEventListener("pointerdown", onPointerDown);
      _domElement.addEventListener("pointerup", onPointerCancel);
      _domElement.addEventListener("pointerleave", onPointerCancel);
    }
    function deactivate() {
      _domElement.removeEventListener("pointermove", onPointerMove);
      _domElement.removeEventListener("pointerdown", onPointerDown);
      _domElement.removeEventListener("pointerup", onPointerCancel);
      _domElement.removeEventListener("pointerleave", onPointerCancel);
      _domElement.style.cursor = "";
    }
    function dispose() {
      deactivate();
    }
    function getObjects() {
      return _objects;
    }
    function setObjects(objects) {
      _objects = objects;
    }
    function getRaycaster() {
      return _raycaster;
    }
    function onPointerMove(event) {
      if (scope.enabled === false)
        return;
      updatePointer(event);
      _raycaster.setFromCamera(_pointer, _camera);
      if (_selected) {
        if (scope.mode === "translate") {
          if (_raycaster.ray.intersectPlane(_plane, _intersection)) {
            _selected.position.copy(_intersection.sub(_offset).applyMatrix4(_inverseMatrix));
          }
        } else if (scope.mode === "rotate") {
          _diff.subVectors(_pointer, _previousPointer).multiplyScalar(scope.rotateSpeed);
          _selected.rotateOnWorldAxis(_up, _diff.x);
          _selected.rotateOnWorldAxis(_right.normalize(), -_diff.y);
        }
        scope.dispatchEvent({ type: "drag", object: _selected });
        _previousPointer.copy(_pointer);
      } else {
        if (event.pointerType === "mouse" || event.pointerType === "pen") {
          _intersections.length = 0;
          _raycaster.setFromCamera(_pointer, _camera);
          _raycaster.intersectObjects(_objects, scope.recursive, _intersections);
          if (_intersections.length > 0) {
            const object = _intersections[0].object;
            _plane.setFromNormalAndCoplanarPoint(_camera.getWorldDirection(_plane.normal), _worldPosition.setFromMatrixPosition(object.matrixWorld));
            if (_hovered !== object && _hovered !== null) {
              scope.dispatchEvent({ type: "hoveroff", object: _hovered });
              _domElement.style.cursor = "auto";
              _hovered = null;
            }
            if (_hovered !== object) {
              scope.dispatchEvent({ type: "hoveron", object });
              _domElement.style.cursor = "pointer";
              _hovered = object;
            }
          } else {
            if (_hovered !== null) {
              scope.dispatchEvent({ type: "hoveroff", object: _hovered });
              _domElement.style.cursor = "auto";
              _hovered = null;
            }
          }
        }
      }
      _previousPointer.copy(_pointer);
    }
    function onPointerDown(event) {
      if (scope.enabled === false)
        return;
      updatePointer(event);
      _intersections.length = 0;
      _raycaster.setFromCamera(_pointer, _camera);
      _raycaster.intersectObjects(_objects, scope.recursive, _intersections);
      if (_intersections.length > 0) {
        if (scope.transformGroup === true) {
          _selected = findGroup(_intersections[0].object);
        } else {
          _selected = _intersections[0].object;
        }
        _plane.setFromNormalAndCoplanarPoint(_camera.getWorldDirection(_plane.normal), _worldPosition.setFromMatrixPosition(_selected.matrixWorld));
        if (_raycaster.ray.intersectPlane(_plane, _intersection)) {
          if (scope.mode === "translate") {
            _inverseMatrix.copy(_selected.parent.matrixWorld).invert();
            _offset.copy(_intersection).sub(_worldPosition.setFromMatrixPosition(_selected.matrixWorld));
          } else if (scope.mode === "rotate") {
            _up.set(0, 1, 0).applyQuaternion(_camera.quaternion).normalize();
            _right.set(1, 0, 0).applyQuaternion(_camera.quaternion).normalize();
          }
        }
        _domElement.style.cursor = "move";
        scope.dispatchEvent({ type: "dragstart", object: _selected });
      }
      _previousPointer.copy(_pointer);
    }
    function onPointerCancel() {
      if (scope.enabled === false)
        return;
      if (_selected) {
        scope.dispatchEvent({ type: "dragend", object: _selected });
        _selected = null;
      }
      _domElement.style.cursor = _hovered ? "pointer" : "auto";
    }
    function updatePointer(event) {
      const rect = _domElement.getBoundingClientRect();
      _pointer.x = (event.clientX - rect.left) / rect.width * 2 - 1;
      _pointer.y = -(event.clientY - rect.top) / rect.height * 2 + 1;
    }
    function findGroup(obj, group = null) {
      if (obj.isGroup)
        group = obj;
      if (obj.parent === null)
        return group;
      return findGroup(obj.parent, group);
    }
    activate();
    this.enabled = true;
    this.recursive = true;
    this.transformGroup = false;
    this.activate = activate;
    this.deactivate = deactivate;
    this.dispose = dispose;
    this.getObjects = getObjects;
    this.getRaycaster = getRaycaster;
    this.setObjects = setObjects;
  }
};
export {
  DragControls
};
//# sourceMappingURL=three_addons_controls_DragControls__js.js.map
