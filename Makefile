all:
	cd img && make
	cd fonts && make

clean:
	cd img && make clean
	cd fonts && make clean
