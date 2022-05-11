let i=0 -i;

echo $(($i + 1))

for x in $(seq 0 10)
do
    echo $x
done

if [[ i -eq 0 ]];
then
    echo "is zero"
else
    echo "not zero"
fi

procedure() {
    echo "im a procedure"
}

procedure