import app from '../../app';

describe('app', () => {

    describe('ProductDetailsController', () => {
        let ctrl;
        let itemDetailsServiceMock;

        // load the controllers module
        beforeEach(() => {
            angular.mock.module(app);

        });

        // Mock the itemDetails service
        beforeEach(() => {
            itemDetailsServiceMock = {
                getItemDetails: function () { }
            };
        });

        // inject the required services and instantiate the controller
        beforeEach(() => {
            angular.mock.inject(($controller) => {
                ctrl = $controller('ProductDetailsController', {
                    itemDetails: itemDetailsServiceMock
                });
            });
        });

        describe('isAvailableOnline', () => {
            it('should return true if the purchasingChannelCode is 0', () => {
                const actual = 0;
                const expected = true;

                expect(ctrl.isAvailableOnline(actual)).toBe(expected);
            });

            it('should return true if the purchasingChannelCode is 1', () => {
                const actual = 1;
                const expected = true;

                expect(ctrl.isAvailableOnline(actual)).toBe(expected);
            });

            it('should return false if the purchasingChannelCode is not 0 or 1', () => {
                const actual = 2;
                const expected = false;

                expect(ctrl.isAvailableOnline(actual)).toBe(expected);
            });
        });

        describe('isAvailableInStore', () => {
            it('should return true if purchasingChannelCode is 0', () => {
                const actual = 0;
                const expected = true;

                expect(ctrl.isAvailableInStore(actual)).toBe(expected);
            });

            it('should return true if purchasingChannelCode is 2', () => {
                const actual = 2;
                const expected = true;

                expect(ctrl.isAvailableInStore(actual)).toBe(expected);
            });

            it('should return false if the purchasingChannelCode is not 0 or 2', () => {
                const actual = 5;
                const expected = false;

                expect(ctrl.isAvailableOnline(actual)).toBe(expected);
            });
        });
    });
});
