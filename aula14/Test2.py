from MainTest import MainTest

class Test2(MainTest):

    def __init__(self, name):
        super().__init__(name)

    def funcName(self):
        return super().funcName()
